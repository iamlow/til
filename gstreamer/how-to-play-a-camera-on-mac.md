## How to play a camera on mac

```sh
gst-launch-1.0 avfvideosrc ! video/x-raw ! glimagesink
```

OR

```sh
gst-launch-1.0 autovideosrc ! video/x-raw ! autovideosink
```

## How to play a screen on mac

```sh
gst-launch-1.0 avfvideosrc capture-screen=true device-index=0 ! video/x-raw ! glimagesink
```
