initSidebarItems({"enum":[["Error","Error types"],["SignedTransaction","A signed transaction"],["Transaction","An unsigned transaction TODO: Implment From going for specific tx to this emum and vice versa"],["TransactionType","A transaction type"],["ValidationError","Transaction Validation errors"]],"externcrate":[["cryptid",""],["ed25519_dalek",""],["rsa",""],["uuid",""],["x25519_dalek",""]],"fn":[["decrypt_vote","Decrypt the vote from the given partial decryptions."],["encrypt_vote","Encrypt a vote with the public key provided by the encryption_key transaction (EncryptionKeyTransaction.encryption_key)"],["encrypted_vote_from_upstream_tx","A convenience function for getting an encrypted-vote from some upstream transaction ID. The upstream transaction should either be a mixnet or a vote transaction."],["generate_keypair","Generate an ed25519 keypair"],["mix","Do a mixnet shuffle This is an expensive and time-consuming operation, so should ideally be offloaded to it’s own thread"],["verify_mix","Verify mixnet shuffle"]],"struct":[["AuthPackage","The Auth Package triplet of election-id, ballot-id, and voter public key"],["AuthPublicKey","RSA Public Key for blind signing"],["Authentication","An Authentication is returned by an authenticator, clearing the voter to vote."],["Authenticator","An Authenticator is responsible for authenticating a voter as allowed to vote a specific ballot in an election."],["DecryptionTransaction","Transaction 9: Decryption"],["ElectionTransaction","Transaction 1: Election"],["EncryptedShare",""],["EncryptionKeyTransaction","Transaction 4: PublicKeyConfirmationTransaction"],["Identifier","Transaction identifier"],["KeyGenCommitmentTransaction","Transaction 2: KeyGenCommitmentTransaction"],["KeyGenPublicKeyTransaction","Transaction 4: KeyGenPublicKeyTransaction"],["KeyGenShareTransaction","Transaction 3: KeyGenShareTransaction"],["MemStore","A simple store that uses an in-memory BTreeMap"],["MixConfig",""],["MixTransaction",""],["PartialDecryptionTransaction","Transaction 8: Partial Decryption"],["Signed","A generic signed transaction"],["TransactionNotFound",""],["Trustee","A trustee is responsible for safeguarding a secret share (a portion of the secret vote decryption key), distributed by the election authority via Shamir Secret Sharing."],["VoteTransaction","Transaction 2: Vote"],["VotingEndTransaction","Transaction 7: VotingEnd"]],"trait":[["CryptoBallotTransaction","All CryptoBallot transactions implement this trait"],["Store","A transaction store"]]});