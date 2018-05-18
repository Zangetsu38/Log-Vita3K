// Fragment shader.
#version 120

uniform ?vec4 uModulateColor;
uniform ?vec4 uTint;
uniform ?vec2 uMasterBrightness;

void main() {
    gl_FragColor = vec4(0, 1, 0, 1);
}
