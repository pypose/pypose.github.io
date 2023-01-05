# Installing on Windows
{:.no_toc}

PyPose can be installed and used on various Windows distributions. Depending on your system and compute requirements, your experience with PyPose on Windows may vary in terms of processing time. It is recommended, but not required, that your Windows system has an NVIDIA GPU in order to harness the full power of PyPose's [CUDA](https://developer.nvidia.com/cuda-zone) [support](https://pytorch.org/tutorials/beginner/blitz/tensor_tutorial.html?highlight=cuda#cuda-tensors).

## Prerequisites
{: #windows-prerequisites}

### Supported Windows Distributions

PyPose is supported on the following Windows distributions:

* [Windows 10](https://www.microsoft.com/en-us/software-download/windows10ISO) or greater recommended.

> The install instructions here will generally apply to all supported Windows distributions. The specific examples shown will be run on a Windows 11 Home machine

### Python
{: #windows-python}

Currently, PyPose on Windows only supports Python 3.7 and beyond; Python 2.x is not supported.

As it is not installed by default on Windows, there are multiple ways to install Python:

* [Chocolatey](https://chocolatey.org/)
* [Python website](https://www.python.org/downloads/windows/)
* [Anaconda](#anaconda)

> If you decide to use Chocolatey, and haven't installed Chocolatey yet, ensure that you are [running your command prompt as an administrator](https://www.howtogeek.com/194041/how-to-open-the-command-prompt-as-administrator-in-windows-8.1/).

For a Chocolatey-based install, run the following command in an [administrative command prompt](https://www.howtogeek.com/194041/how-to-open-the-command-prompt-as-administrator-in-windows-8.1/):

```bash
choco install python
```

### Package Manager
{: #windows-package-manager}

To install the PyPose binaries, you will need to use at least one of two supported package managers: [Anaconda](https://www.anaconda.com/download/#windows) and [pip](https://pypi.org/project/pip/). Currently we only support `pip` and it will provide you all of the PyPose dependencies in one, sandboxed install.

#### pip

If you installed Python by any of the recommended ways [above](#windows-python), [pip](https://pypi.org/project/pip/) will have already been installed for you.

## Installation
{: #windows-installation}

### pip
{: #windows-anaconda}

#### No CUDA

Currently we do not have a CPU version of PyPose. Please stay tuned!

#### With CUDA

To install PyPose via pip, and you do have a [CUDA-capable](https://developer.nvidia.com/cuda-zone) system, in the above selector, choose OS: Windows, Package: pip and the CUDA version suited to your machine. Often, the latest CUDA version is better.
Then, run the command that is presented to you. 

## Verification
{: #windows-verification}

To ensure that PyPose was installed correctly, we can verify the installation by running sample PyPose code. Here we will construct a randomly initialized tensor.

From the command line, type:

```bash
python
```

then enter the following code:

```python
import pypose as pp
pp.__version__
```

The output should be something similar to:

```
'0.2.0'
```
