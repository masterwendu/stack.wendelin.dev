(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{206:function(a,e,t){"use strict";t.r(e);var r=t(0),s=Object(r.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"linux"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[a._v("#")]),a._v(" Linux")]),a._v(" "),t("p",[a._v("As my operating system I use "),t("a",{attrs:{href:"https://manjaro.org/download/community/i3/",target:"_blank",rel:"noopener noreferrer"}},[t("strong",[a._v("Manjaro")]),a._v(" i3 edition"),t("OutboundLink")],1),a._v(".\nManjaro is the OS of my choice because it's easy to install, has up to date packages and can use the "),t("a",{attrs:{href:"https://aur.archlinux.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("AUR"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("i3 is the desktop manager of my choice, because it helps a lot to stay focused and of course because it's hackerstyle 😀")]),a._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#i3-config"}},[a._v("i3 config")])]),t("li",[t("a",{attrs:{href:"#i3-hotkeys"}},[a._v("i3 hotkeys")])]),t("li",[t("a",{attrs:{href:"#applications"}},[a._v("Applications")]),t("ul",[t("li",[t("a",{attrs:{href:"#yay-aur-package-manager"}},[a._v("yay - AUR package manager")])]),t("li",[t("a",{attrs:{href:"#volta-sh"}},[a._v("volta.sh")])]),t("li",[t("a",{attrs:{href:"#fm4-player-web-version"}},[a._v("fm4 player (web version)")])])])])])]),t("p"),a._v(" "),t("h2",{attrs:{id:"i3-config"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#i3-config"}},[a._v("#")]),a._v(" i3 config")]),a._v(" "),t("p",[a._v("TODO")]),a._v(" "),t("h2",{attrs:{id:"i3-hotkeys"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#i3-hotkeys"}},[a._v("#")]),a._v(" i3 hotkeys")]),a._v(" "),t("ul",[t("li",[a._v("[ ] TODO")]),a._v(" "),t("li",[a._v("[ ] hello")])]),a._v(" "),t("h2",{attrs:{id:"applications"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#applications"}},[a._v("#")]),a._v(" Applications")]),a._v(" "),t("h3",{attrs:{id:"yay-aur-package-manager"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#yay-aur-package-manager"}},[a._v("#")]),a._v(" yay - AUR package manager")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/Jguer/yay",target:"_blank",rel:"noopener noreferrer"}},[a._v("Website"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("Install on manjaro:\n"),t("code",[a._v("sudo pacman -S yay")])]),a._v(" "),t("p",[t("strong",[a._v("Why")]),t("br"),a._v("\nBecause it is easy to use and uses pacman syntax.")]),a._v(" "),t("h3",{attrs:{id:"volta-sh"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#volta-sh"}},[a._v("#")]),a._v(" volta.sh")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://volta.sh/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Website"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("em",[a._v("requirements")])]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#yay-aur-package-manager"}},[a._v("yay")])])]),a._v(" "),t("p",[a._v("Install on manjaro:\n"),t("code",[a._v("yay -S volta")])]),a._v(" "),t("p",[t("strong",[a._v("Problems")]),t("br"),a._v("\nSome AUR packages cannot be installed, because volta doesn't allow to use global install of "),t("code",[a._v("yarn")]),a._v(" or "),t("code",[a._v("npm")]),a._v(" but some installation scripts use this methods. For now I have no solution for that problem")]),a._v(" "),t("h3",{attrs:{id:"fm4-player-web-version"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fm4-player-web-version"}},[a._v("#")]),a._v(" fm4 player (web version)")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://fm4.orf.at/player",target:"_blank",rel:"noopener noreferrer"}},[a._v("Website"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("em",[a._v("requirements")])]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#volta-sh"}},[a._v("volta")])])]),a._v(" "),t("p",[a._v("Install on manjaro:")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("volta install nativefier")])]),a._v(" "),t("li",[t("code",[a._v('nativefier --show-menu-bar --tray --name "FM4" --single-instance "https://fm4.orf.at/player"')]),a._v(" ( "),t("code",[a._v("--tray")]),a._v(" is option, but I like to see that it's running)")]),a._v(" "),t("li",[a._v("create in "),t("code",[a._v("~/.local/share/applications")]),a._v(" a file called "),t("code",[a._v("fm4_player.desktop")]),a._v(" with following content")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("[Desktop Entry]\nType=Application\nTerminal=false\nName=FM4 Player\nIcon=/home/wendelin/Pictures/application_icons/fm4Player.png\nExec=/home/wendelin/FM4-linux-x64/FM4\n")])])]),t("ul",[t("li",[a._v("download the fm4 logo and save it to the Icon path (or change the icon path)")]),a._v(" "),t("li",[a._v("check if the exec path is correct")]),a._v(" "),t("li",[a._v("reboot to have it in your launcher")])])])}),[],!1,null,null,null);e.default=s.exports}}]);