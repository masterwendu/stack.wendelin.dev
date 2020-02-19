# i3 config file
`~/.i3/config`

<a href="/assets/i3/config" download>Download</a>

```python
# i3 config file - Wendelin Peleska

# Set mod key (Mod1=<Alt>, Mod4=<Super>)
set $mod Mod4

# Configure border style <normal|1pixel|pixel xx|none|pixel>
new_window pixel 4
new_float pixel 4

# Font for window titles. Will also be used by the bar unless a different font
font xft:JetBrains Mono 10

# Use Mouse+$mod to drag floating windows
floating_modifier $mod

# start a terminal
# lxterminal provide to set a title, which helps to create a default terminal within scratchpad on startup
bindsym $mod+Return exec lxterminal

# kill focused window - except the terminal in the scratchpad
bindsym $mod+Shift+q [con_id="__focused__" title="^(?!terminal-scratchpad).*$"] kill

# start albert launcher - keybinding is handled by albert internally
exec_always --no-startup-id albert

# Quickstart Applications
bindsym Print exec --no-startup-id flameshot gui
bindsym $mod+Ctrl+x --release exec --no-startup-id xkill

# change focus
bindsym $mod+Left focus left
bindsym $mod+Down focus down
bindsym $mod+Up focus up
bindsym $mod+Right focus right

# alternatively, you can use the cursor keys:
bindsym $mod+Shift+Left move left
bindsym $mod+Shift+Down move down
bindsym $mod+Shift+Up move up
bindsym $mod+Shift+Right move right

# split orientation
bindsym $mod+h split h;exec notify-send 'tile horizontally'
bindsym $mod+v split v;exec notify-send 'tile vertically'
bindsym $mod+q split toggle

# toggle fullscreen mode for the focused container
bindsym $mod+f fullscreen toggle

# change container layout (stacked, tabbed, toggle split)
bindsym $mod+s layout stacking
bindsym $mod+w layout tabbed
bindsym $mod+e layout toggle split

# toggle tiling / floating
bindsym $mod+Shift+space floating toggle

# change focus between tiling / floating windows
bindsym $mod+space focus mode_toggle

# toggle sticky
bindsym $mod+Shift+s sticky toggle

# focus the parent container
bindsym $mod+a focus parent

# move the currently focused window to the scratchpad
bindsym $mod+Shift+minus move scratchpad

# Show the next scratchpad window or hide the focused scratchpad window.
# If there are multiple scratchpad windows, this command cycles through them.
set $scratchpad_position resize set 50ppt 80ppt; move position center
bindsym $mod+minus scratchpad show; $scratchpad_position

#navigate workspaces next / previous
bindsym $mod+Ctrl+Right workspace next
bindsym $mod+Ctrl+Left workspace prev

# Workspace names
set $ws0 0
set $ws1 1
set $ws2 2
set $ws3 3
set $ws4 4
set $ws5 5
set $ws6 6
set $ws7 7
set $ws8 8
set $ws9 9

# switch to workspace
bindsym $mod+0 workspace $ws0
bindsym $mod+1 workspace $ws1
bindsym $mod+2 workspace $ws2
bindsym $mod+3 workspace $ws3
bindsym $mod+4 workspace $ws4
bindsym $mod+5 workspace $ws5
bindsym $mod+6 workspace $ws6
bindsym $mod+7 workspace $ws7
bindsym $mod+8 workspace $ws8
bindsym $mod+9 workspace $ws9

# Move focused container to workspace
bindsym $mod+Ctrl+1 move container to workspace $ws1
bindsym $mod+Ctrl+2 move container to workspace $ws2
bindsym $mod+Ctrl+3 move container to workspace $ws3
bindsym $mod+Ctrl+4 move container to workspace $ws4
bindsym $mod+Ctrl+5 move container to workspace $ws5
bindsym $mod+Ctrl+6 move container to workspace $ws6
bindsym $mod+Ctrl+7 move container to workspace $ws7
bindsym $mod+Ctrl+8 move container to workspace $ws8

# Move to workspace with focused container
bindsym $mod+Shift+1 move container to workspace $ws1; workspace $ws1
bindsym $mod+Shift+2 move container to workspace $ws2; workspace $ws2
bindsym $mod+Shift+3 move container to workspace $ws3; workspace $ws3
bindsym $mod+Shift+4 move container to workspace $ws4; workspace $ws4
bindsym $mod+Shift+5 move container to workspace $ws5; workspace $ws5
bindsym $mod+Shift+6 move container to workspace $ws6; workspace $ws6
bindsym $mod+Shift+7 move container to workspace $ws7; workspace $ws7
bindsym $mod+Shift+8 move container to workspace $ws8; workspace $ws8

# switch to workspace with urgent window automatically
for_window [urgent=latest] focus

# Open specific applications in floating mode
for_window [title="alsamixer"] floating enable
for_window [class="GParted"] floating enable
for_window [class="Lxappearance"] floating enable sticky enable
for_window [class="Manjaro-hello"] floating enable
for_window [class="Manjaro Settings Manager"] floating enable
for_window [class="Nitrogen"] floating enable sticky enable
for_window [class="Pamac-manager"] floating enable
for_window [class="Pavucontrol"] floating enable
for_window [class="qt5ct"] floating enable sticky enable
for_window [class="(?i)System-config-printer.py"] floating enable
for_window [class="(?i)virtualbox"] floating enable

# open specifc applications in scratchpad automatically
for_window [class="Slack"] move window to scratchpad
for_window [class="Notes"] move window to scratchpad
for_window [class="fm-4-nativefier-cc5e60"] move window to scratchpad
for_window [class="Spotify"] move window to scratchpad
for_window [class="TelegramDesktop"] move window to scratchpad
# scratchpad terminal settings
set $launch_scratchpad_terminal exec --no-startup-id lxterminal -t terminal-scratchpad
set $scratchpad_terminal_id class="Lxterminal" title="terminal-scratchpad"
exec --no-startup-id lxterminal -t terminal-scratchpad
for_window [$scratchpad_terminal_id] move scratchpad
for_window [$scratchpad_terminal_id] $scratchpad_border

# scratchpad keybindings for special apps
bindsym mod1+t [$scratchpad_terminal_id] scratchpad show; $scratchpad_position
bindsym mod1+s [class="Slack"] scratchpad show; $scratchpad_position
bindsym mod1+n [class="Notes"] scratchpad show; $scratchpad_position
bindsym mod1+m [class="fm-4-nativefier-cc5e60|Spotify"] scratchpad show; $scratchpad_position
bindsym mod1+b [class="TelegramDesktop"] scratchpad show; $scratchpad_position

# reload the configuration file
bindsym $mod+Shift+c reload

# restart i3 inplace (preserves your layout/session, can be used to upgrade i3)
bindsym $mod+Shift+r restart

# exit i3 (logs you out of your X session)
bindsym $mod+Shift+e exec "i3-nagbar -t warning -m 'You pressed the exit shortcut. Do you really want to exit i3? This will end your X session.' -b 'Yes, exit i3' 'i3-msg exit'"

# Resize window (you can also use the mouse for that)
bindsym $mod+r mode "resize"
mode "resize" {
        # These bindings trigger as soon as you enter the resize mode
        # Pressing left will shrink the window’s width.
        # Pressing right will grow the window’s width.
        # Pressing up will shrink the window’s height.
        # Pressing down will grow the window’s height.
        bindsym Left resize shrink width 10 px or 10 ppt
        bindsym Down resize grow height 10 px or 10 ppt
        bindsym Up resize shrink height 10 px or 10 ppt
        bindsym Right resize grow width 10 px or 10 ppt

        # exit resize mode: Enter or Escape
        bindsym Return mode "default"
        bindsym Escape mode "default"
}

# Lock screen
bindsym $mod+l exec --no-startup-id blurlock

# Autostart applications
exec --no-startup-id /usr/lib/polkit-gnome/polkit-gnome-authentication-agent-1
exec --no-startup-id nitrogen --restore; sleep 1; compton -b
exec --no-startup-id nm-applet
exec --no-startup-id xfce4-power-manager
exec --no-startup-id pamac-tray
exec --no-startup-id clipit
exec --no-startup-id volumeicon
exec_always --no-startup-id numlockx on
exec_always --no-startup-id fix_xcursor
# I don't know what next 2 are doing
exec --no-startup-id start_conky_maia
exec_always --no-startup-id ff-theme-util

# i3bar
bar {
	i3bar_command i3bar
	status_command i3status
	position bottom

	bindsym button4 nop
	bindsym button5 nop
	strip_workspace_numbers yes

    colors {
        background #222222
        statusline #dddddd
        separator #666666
        focused_workspace #0088CC #0088CC #ffffff #282828
        active_workspace #333333 #333333 #ffffff #928374
        inactive_workspace #333333 #333333 #888888 #928374
        urgent_workspace #2f343a #900000 #ffffff #ebdbb2
    }
}

# move workspace for multi monitor setup
bindsym $mod+m move workspace to output left
bindsym $mod+shift+m move workspace to output down

# Theme colors
# class                   border  backgr. text    indic.   child_border
  client.focused #0088CC #0088CC #ffffff #dddddd
  client.focused_inactive #333333 #333333 #888888 #292d2e
  client.unfocused #333333 #333333 #888888 #292d2e
  client.urgent #2f343a #900000 #ffffff #900000
  client.placeholder      #000000 #0c0c0c #ffffff #000000
  client.background       #2B2C2B

# i3gaps settings
gaps inner 15
gaps outer -5

# Spotify related key bindings for media keys
bindsym XF86AudioPlay exec "exec playerctl play-pause"
bindsym XF86AudioPause exec "exec playerctl play-pause"
bindsym $mod+p exec "exec playerctl play-pause"
bindsym XF86AudioStop exec "exec playerctl stop"
bindsym XF86AudioPrev exec "exec playerctl previous"
bindsym XF86AudioNext exec "exec playerctl next"
```
