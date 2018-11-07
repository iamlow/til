## Environments

- Device: Nvidia Jetson TX1/TX2
- OS: Ubuntu 16.04
- GStreamer version 1.8.3

## To install Gstreamer

```sh
sudo add-apt-repository universe 
sudo add-apt-repository multiverse 
sudo apt-get update 
sudo apt-get install gstreamer1.0-tools gstreamer1.0-alsa \
  gstreamer1.0-plugins-base gstreamer1.0-plugins-good \
  gstreamer1.0-plugins-bad gstreamer1.0-plugins-ugly \
  gstreamer1.0-libav gstreamer1.0-x
sudo apt-get install libgstreamer1.0-dev \
  libgstreamer-plugins-base1.0-dev \
  libgstreamer-plugins-good1.0-dev \
  libgstreamer-plugins-bad1.0-dev
```

## To check the Gstreamer-1.0 version

```sh
gst-inspect-1.0 --version 
```

## Clear the registry cache file, in case there is an issue

```sh
rm ~/.cache/gstreamer-1.0/registry.aarch64.bin
```
## To install gstreamer for python

```sh
sudo apt-get install -y --no-install-recommends \
    python-pip python-gst-1.0 python-gi \
    python3-pip python3-venv python3-gst-1.0 python3-gi
```

## References

- [ACCELERATED GSTREAMER USER GUIDE Release 28.2](https://developer.download.nvidia.com/embedded/L4T/r28_Release_v2.0/GA/Docs/Jetson_TX1_and_TX2_Accelerated_GStreamer_User_Guide.pdf)
