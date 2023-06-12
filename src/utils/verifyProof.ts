import { keccak256 } from "ethereum-cryptography/keccak";
import { hexToBytes, bytesToHex } from "ethereum-cryptography/utils";

export type MerkleProof = {
  data: Uint8Array | string;
  left: boolean;
};

const concat = (left: Uint8Array, right: Uint8Array) =>
  keccak256(Buffer.concat([left, right]));

export function verifyProof(proof: MerkleProof[], leaf: string, root: string) {
  proof = proof.map(({ data, left }) => ({
    left,
    data: hexToBytes(data as string),
  }));
  let data = keccak256(Buffer.from(leaf));

  for (let i = 0; i < proof.length; i++) {
    if (proof[i].left) {
      data = concat(proof[i].data as Uint8Array, data);
    } else {
      data = concat(data, proof[i].data as Uint8Array);
    }
  }

  return bytesToHex(data) === root;
}
