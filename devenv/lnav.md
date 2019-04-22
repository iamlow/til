## Quick Start 

```sh
# Prerequisites
sudo apt-get install -y libncurses5-dev libncursesw5-dev libreadline-dev libsqlite3-dev
# Download and extract
curl -L https://github.com/tstack/lnav/releases/download/v0.8.5/lnav-0.8.5.tar.gz | tar xz
cd lnav-0.8.5
# Build and install
./configure
make -j4
sudo make install
# Run
lnav
```

**References:**

* https://github.com/tstack/lnav
