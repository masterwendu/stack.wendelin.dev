# i3 statusbar config

config is located at `~/.config/i3status/config`

```
# i3status configuration file - Wendelin Peleska

general {
        colors = true
        interval = 5
        color_good = "#2AA198"
        color_bad = "#586E75"
        color_degraded = "#DC322F"
}

order += "cpu_usage"
# order += "load"
order += "disk /"
# order += "disk /home"
order += "wireless _first_"
order += "ethernet _first_"
# order += "load"
order += "tztime local"
# order += "ipv6"

cpu_usage {
        format = "🎛️ %usage "
}

load {
        format = " load %1min "
        # max_threshold = 0.3
}

disk "/" {
        # format = "ssd %avail "
        format = "🖴 %avail"
}

wireless _first_ {
# if you use %speed, i3status requires root privileges
        format_up = " W: (%quality at %essid) %ip "
        format_down = " no wifi "
}

ethernet _first_ {
# if you use %speed, i3status requires root privileges
        format_up = " LAN: %ip %speed "
        format_down = ""
}

tztime local {
        # format = "%Y-%m-%d %H:%M:%S"
        format = " %d.%m. %H:%M "
}
```
