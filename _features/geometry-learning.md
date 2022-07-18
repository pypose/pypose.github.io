---
title: Geometric Learning
order: 10
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

summary-home: Can combine geometry-based methods such as bundle adjustments and factor graph optimization with learning-based methods such as feature extraction and loop closure detection.
featured-home: true

---
