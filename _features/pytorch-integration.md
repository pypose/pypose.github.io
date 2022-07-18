---
title: PyTorch Integration
order: 8
snippet: >
  ```sh
    export IMAGE_FAMILY="pytorch-latest-cpu"
    export ZONE="us-west1-b"
    export INSTANCE_NAME="my-instance"
    
    gcloud compute instances create $INSTANCE_NAME \
      --zone=$ZONE \
      --image-family=$IMAGE_FAMILY \
      --image-project=deeplearning-platform-release
  ```

summary-home: PyPose is built upon the PyTorch library with deep integrations with the functionality and syntax you know and love. 
featured-home: true

---
