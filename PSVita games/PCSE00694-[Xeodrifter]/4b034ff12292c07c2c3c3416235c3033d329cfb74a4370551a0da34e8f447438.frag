// Fragment shader.
#version 120

uniform ?vec4 uModulateColor;
uniform ?vec4 uTint;
uniform ?vec4 uAddColor;
uniform ?vec2 uMasterBrightness;
uniform sampler2D ubyteSampler0;

void main() {
    gl_FragColor = vec4(0, 1, 0, 1);
}
