# How to install Gstreamer on Jetson

## To build GStreamer using gst-install

### Prequirements

Install needed packages with the following command:

```
sudo apt-get install rtmpdump librtmp1 librtmp-dev
```

### Execute the following command:

```
gst-install [--prefix=<install_path>] [--version=<version>]
```

Where <install_path> is the location where you are installing GStreamer and <version> is the GStreamer version. For example:

```
gst-install --prefix=/home/ubuntu/gst-1.12.4 --version=1.12.4
```

### Export environment variables with the following command:

```
export LD_LIBRARY_PATH=<install_path>/lib/aarch64-linux-gnu export PATH=<install_path>/bin:$PATH
export LD_LIBRARY_PATH=/home/ubuntu/gst-1.12.4/lib/aarch64-linux-gnu export PATH==/home/ubuntu/gst-1.12.4/bin:$PATH
```

Where <install_path> is the location where you are installing GStreamer. For example:

```
export LD_LIBRARY_PATH=/home/ubuntu/gst-1.12.4/lib/aarch64-linux-gnu 
export PATH==/home/ubuntu/gst-1.12.4/bin:$PATH
```

### Check version

```
gst-inspect-1.0 --version
```

## To build gst-libav

### Set the PKG_CONFIG_PATH with the following command:

```
export PKG_CONFIG_PATH=/home/ubuntu/gst_1.12.4/lib/aarch64-linux-gnu/pkgconfig
```

### Download source

```
wget https://gstreamer.freedesktop.org/src/gst-libav/gst-libav-1.12.4.tar.xz
xz -d gst-libav-1.12.4.tar.xz
tar xf gst-libav-1.12.4.tar
cd gst-libav-1.12.4
./configure --prefix=/home/ubuntu/gst_1.12.4 --libdir=/home/ubuntu/gst_1.12.4/lib/aarch64-linux-gnu
make -j4
make install
```

## References

- [ACCELERATED GSTREAMER USER GUIDE DA_07303-3.6 | April 26, 2018 Release 28.2](https://developer.download.nvidia.com/embedded/L4T/r28_Release_v2.0/GA/Docs/Jetson_TX1_and_TX2_Accelerated_GStreamer_User_Guide.pdf)
