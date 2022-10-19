# Installing on macOS
{:.no_toc}

PyPose can be installed and used on macOS. Depending on your system and compute requirements, your experience with PyPose on a Mac may vary in terms of processing time. It is recommended, but not required, that your Mac have an NVIDIA GPU in order to harness the full power of PyPose's [CUDA](https://developer.nvidia.com/cuda-zone) support.

> Currently, CUDA support on macOS is only available by [building PyPose from source](#mac-from-source)

## Prerequisites
{: #mac-prerequisites}

### macOS Version

PyPose is supported on macOS 10.10 (Yosemite) or above.

### Python
{: #mac-python}

It is recommended that you use Python 3.7 or greater, which can be installed either through the Anaconda package manager (see [below](#anaconda)), [Homebrew](https://brew.sh/), or the [Python website](https://www.python.org/downloads/mac-osx/).

### Package Manager
{: #mac-package-manager}

To install the PyPose binaries, you will need to use one of two supported package managers: [Anaconda](https://www.anaconda.com/download/#macos) or [pip](https://pypi.org/project/pip/). Anaconda is the recommended package manager as it will provide you all of the PyPose dependencies in one, sandboxed install, including Python.

#### Anaconda

To install Anaconda, you can [download graphical installer](https://www.anaconda.com/download/#macos) or use the command-line installer. If you use the command-line installer, you can right-click on the installer link, select `Copy Link Address`, and then use the following commands:

```bash
# The version of Anaconda may be different depending on when you are installing`
curl -O https://repo.anaconda.com/miniconda/Miniconda3-latest-MacOSX-x86_64.sh
sh Miniconda3-latest-MacOSX-x86_64.sh
# and follow the prompts. The defaults are generally good.`
```

#### pip

*Python 3*

If you installed Python via Homebrew or the Python website, `pip` was installed with it. If you installed Python 3.x, then you will be using the command `pip3`.

> Tip: If you want to use just the command  `pip`, instead of `pip3`, you can symlink `pip` to the `pip3` binary.

## Installation
{: #mac-installation}

### pip
{: #mac-anaconda}

To install PyPose via pip, use one of the following command

```bash
# Python 3.x
pip install pypose
```

## Verification
{: #mac-verification}

To ensure that PyPose was installed correctly, we can verify the installation by running sample PyPose code. Here we will construct a randomly initialized tensor.


```python
>>> import torch, pypose as pp

>>> # A random so(3) LieTensor
>>> r = pp.randn_so3(2, requires_grad=True)
    so3Type LieTensor:
    tensor([[ 0.1606,  0.0232, -1.5516],
            [-0.0807, -0.7184, -0.1102]], requires_grad=True)
```

## Building from source
{: #mac-from-source}

For the majority of PyPose users, installing from a pre-built binary via a package manager will provide the best experience. However, there are times when you may want to install the bleeding edge PyPose code, whether for testing or actual development on the PyPose core.

> You will also need to build from source if you want CUDA support.

### Prerequisites
{: #mac-prerequisites-2}

1. Install [Anaconda](#anaconda)
2. Install [CUDA](https://developer.nvidia.com/cuda-downloads), if your machine has a [CUDA-enabled GPU](https://developer.nvidia.com/cuda-gpus).
3. Install from [source](https://github.com/pypose/pypose).

You can verify the installation as described [above](#mac-verification).
