**Installation on TX2:**

```sh
# prequisites
sudo apt-get install build-essential cmake ncurses-dev libncurses5-dev libpcre2-dev gettext
# download
wget https://github.com/fish-shell/fish-shell/releases/download/3.0.2/fish-3.0.2.tar.gz
# extract
tar xvfz fish-3.0.2.tar.gz
# build
cd fish-3.0.2
mkdir build; cd build
cmake ..
make
sudo make install
# set default shell (ERROR!)
chsh -s /usr/local/bin/fish
```

**References:**

* https://github.com/fish-shell/fish-shell
