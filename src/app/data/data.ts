import { MerkleTree } from "@/utils/MerkleTree";
import { bytesToHex } from "ethereum-cryptography/utils";
import list from "../../utils/niceList.json";
import { verifyProof } from "@/utils/verifyProof";

const merkleTree = new MerkleTree(list);
const merkleRoot = merkleTree._getRoot();
const merkleRootString = bytesToHex(merkleRoot);

export const verifyNameInList = (nameToVerify: string) => {
  const nameToVerifyIdx = list.findIndex((el) => el === nameToVerify);
  console.log({ nameToVerifyIdx, merkleRootString, merkleRoot });
  const merkleProof = merkleTree.getProof(nameToVerifyIdx);
  const verified = verifyProof(merkleProof, nameToVerify, merkleRootString);
  console.log({ verified });
  return verified;
};
