# fish shell

* zsh과 비교하여 사용하기에 쾨적한 느낌이 있음. 
* 반응속도가 월등히 빠름. JETSON과 같은 ARM환경에서도 잘 동작함.
* Package Management(fisher)도 잘되어있음.
> zsh에서 갈아탈것 같음 느낌...ㅋㅋ

**References:**

* https://github.com/fish-shell/fish-shell
* https://github.com/jorgebucaran/awesome-fish

## fish

**Installation on TX2:**

```sh
# prequisites
sudo apt-get install -y build-essential cmake ncurses-dev libncurses5-dev libpcre2-dev gettext
# download
wget https://github.com/fish-shell/fish-shell/releases/download/3.0.2/fish-3.0.2.tar.gz
# extract
tar xfz fish-3.0.2.tar.gz
# build
cd fish-3.0.2
mkdir build; cd build
cmake ..
make
sudo make install
# add to /etc/shells
sudo bash -c "echo /usr/local/bin/fish >> /etc/shells"
# set default shell
chsh -s /usr/local/bin/fish
```

## fisher

**Installation on TX2:**

```sh
curl https://git.io/fisher --create-dirs -sLo ~/.config/fish/functions/fisher.fish
fisher add jethrokuan/z rafaelrinaldi/pure
```
