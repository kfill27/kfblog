require "refile/s3"

aws = {
  access_key_id: "KFAWSACCESSKEY",
  secret_access_key: "KFAWSSECRETKEY",
  region: "us-east-1",
  bucket: "S3_BUCKET_NAME",
}
Refile.cache = Refile::S3.new(prefix: "cache", **aws)
Refile.store = Refile::S3.new(prefix: "store", **aws)
