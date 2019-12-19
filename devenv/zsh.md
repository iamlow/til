**Prerequisites:**

* install zsh
* install antigen

**.zshrc:**

```sh
# Load antigen file
source /usr/local/share/antigen/antigen.zsh

# Load the oh-my-zsh's library.
antigen use oh-my-zsh

# Bundles from the default repo (robbyrussell's oh-my-zsh).
antigen bundle git
antigen bundle heroku
antigen bundle pip
antigen bundle lein
antigen bundle command-not-found
antigen bundle autojump
antigen bundle common-aliases
antigen bundle compleat
antigen bundle git-extras
antigen bundle git-flow
antigen bundle npm
antigen bundle web-search
antigen bundle z
antigen bundle zsh-users/zsh-history-substring-search ./zsh-history-substring-search.zsh
antigen bundle zsh-users/zsh-autosuggestions
antigen bundle zsh-users/zsh-completions
antigen bundle mafredri/zsh-async

# Syntax highlighting bundle.
antigen bundle zsh-users/zsh-syntax-highlighting

# Load the theme
# antigen theme https://github.com/denysdovhan/spaceship-zsh-theme spaceship
# antigen bundle sindresorhus/pure
antigen theme romkatv/powerlevel10k

# Tell Antigen that you're done.
antigen apply

# Load custom aliases
[[ -s "$HOME/.bash_aliases" ]] && source "$HOME/.bash_aliases"
```

**Pure Power:**

```sh
( cd && curl -fsSLO https://raw.githubusercontent.com/romkatv/dotfiles-public/master/.purepower )
echo 'source ~/.purepower' >>! ~/.zshrc
```

**References:**

* https://github.com/robbyrussell/oh-my-zsh/wiki/Installing-ZSH?source=post_page---------------------------
* https://github.com/romkatv/powerlevel10k
