---
title: Change node version automatically with nvm and zsh
date: '2021-02-14T22:01:39.990Z'
layout: post
draft: false 
category: 'Software Development'
path: '/posts/change-node-version-automatically-zsh'
description: 'Change node version automatically with zsh Hook Functions when working directory changes'
tags:
    - 'Web development'
    - 'Software Development'

---

I have been a zsh user for a while now, for those who do not know zsh, it is a unix shell and command language based on bash with improvements.
Recently, I found myself with a very slow terminal. It took a good 3 to 5 seconds to launch a new terminal session in any directory, which got
increasingly annoying. The major culprit was a bash script I nicked of stackoverflow 😅 (you know you do it too) to switch node versions automatically.
I decided to remove that piece of code, write my own (hopefully a simpler and improved version).

### Let's modify the zsh profile

```bash
open ~/.zshrc
```
To begin, open your zshrc file located here `~/.zshrc` (this is platform dependent), in your favourite editor.
We will be tapping into zsh hook functions to make this work, specifically `chpwd`, which is executed whenever the current working directory is
changed.

```bash
chpwd_functions=(change_nvm_version)
```

Let's define the `change_node_version` function. We first check if the file exits with the `-f` flag, it also checks that `./.nvmrc` is nothing but a
file. We `cat` the file and save the content in `$version`. Lastly, switch the node version with nvm (`nvm use $version`). I will assume you
have `nvm` installed, otherwise [check here](https://github.com/nvm-sh/nvm) for the installation.

```bash
function change_node_version {
	nvmrc="./.nvmrc"
	if [ -f "$nvmrc" ]; then
		version="$(cat "$nvmrc")"
		nvm use $version
	fi
}

chpwd_functions=(change_node_version)
```

The last step is to source your zshrc profile and voila 

```bash
source ~/.zshrc 
```

---

This solution works for my needs and my terminal is faster again 🚀, feel free to suggest improvements. Until next time, stay curious !





