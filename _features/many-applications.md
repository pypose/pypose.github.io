---
title: Robotics-Oriented
order: 9
snippet: >
  ```cpp
    #include <torch/torch.h>

    torch::nn::Linear model(num_features, 1);
    torch::optim::SGD optimizer(model->parameters());
    auto data_loader = torch::data::data_loader(dataset);

    for (size_t epoch = 0; epoch < 10; ++epoch) {
      for (auto batch : data_loader) {
        auto prediction = model->forward(batch.data);
        auto loss = loss_function(prediction, batch.target);
        loss.backward();
        optimizer.step();
      }
    }
  ```
summary-home: Designed for robotic applications including SLAM (VIO, stereo VO, multiple view VO, LiDAR), Control (MPC), and Planning.
featured-home: true
---
