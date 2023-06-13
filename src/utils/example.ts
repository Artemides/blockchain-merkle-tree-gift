import { bytesToHex } from "ethereum-cryptography/utils";
import { MerkleTree } from "./MerkleTree";
import list from "./niceList.json";
import { verifyProof } from "./verifyProof";

const merkleTreeMain = () => {
  const merkleTree = new MerkleTree(list);
  const merkleRoot = merkleTree._getRoot();
  const merkleRootString = bytesToHex(merkleRoot);
  const nameToVerify = "Edmond Carroll PhDs";
  const nameToVerifyIdx = list.findIndex((el) => el === "Edmond Carroll PhD");
  const merkleProof = merkleTree.getProof(nameToVerifyIdx);
  const verified = verifyProof(merkleProof, nameToVerify, merkleRootString);
};
