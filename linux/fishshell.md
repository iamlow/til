# fish shell

* zsh과 비교하여 사용하기에 쾨적한 느낌이 있음. 
* 반응속도가 월등히 빠름. JETSON과 같은 ARM환경에서도 잘 동작함.
  > 속도가 느린이유는 pyenv를 환경설정 파일에 적용하면 느려짐.
* Package Management(fisher)도 잘되어있음.

**특징:**

* zsh과 달리 script 문법이 bash와 다름.
> 이것 때문에 못쓰겠음.

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
cd fish-3.0.2 && mkdir build && cd build && cmake .. && make -j4
sudo make install
# add to /etc/shells
sudo bash -c "echo /usr/local/bin/fish >> /etc/shells"
# set default shell
chsh -s /usr/local/bin/fish
```

**Setting colors:**

```sh
set fish_color_command green
```

**Default Settings:**
> ~/.config/fish/fish_variables

```sh
# This file contains fish universal variable definitions.
# VERSION: 3.0
SETUVAR fish_color_autosuggestion:555\x1ebrblack
SETUVAR fish_color_cancel:\x2dr
SETUVAR fish_color_command:005fd7
SETUVAR fish_color_comment:990000
SETUVAR fish_color_cwd:green
SETUVAR fish_color_cwd_root:red
SETUVAR fish_color_end:009900
SETUVAR fish_color_error:ff0000
SETUVAR fish_color_escape:00a6b2
SETUVAR fish_color_history_current:\x2d\x2dbold
SETUVAR fish_color_host:normal
SETUVAR fish_color_match:\x2d\x2dbackground\x3dbrblue
SETUVAR fish_color_normal:normal
SETUVAR fish_color_operator:00a6b2
SETUVAR fish_color_param:00afff
SETUVAR fish_color_quote:999900
SETUVAR fish_color_redirection:00afff
SETUVAR fish_color_search_match:bryellow\x1e\x2d\x2dbackground\x3dbrblack
SETUVAR fish_color_selection:white\x1e\x2d\x2dbold\x1e\x2d\x2dbackground\x3dbrblack
SETUVAR fish_color_user:brgreen
SETUVAR fish_color_valid_path:\x2d\x2dunderline
SETUVAR fish_greeting:Welcome\x20to\x20fish\x2c\x20the\x20friendly\x20interactive\x20shell
SETUVAR fish_key_bindings:fish_default_key_bindings
SETUVAR fish_pager_color_description:B3A06D\x1eyellow
SETUVAR fish_pager_color_prefix:white\x1e\x2d\x2dbold\x1e\x2d\x2dunderline
SETUVAR fish_pager_color_progress:brwhite\x1e\x2d\x2dbackground\x3dcyan
```

## fisher

**Installation on TX2:**

```sh
curl https://git.io/fisher --create-dirs -sLo ~/.config/fish/functions/fisher.fish
fisher add jethrokuan/z rafaelrinaldi/pure
```
