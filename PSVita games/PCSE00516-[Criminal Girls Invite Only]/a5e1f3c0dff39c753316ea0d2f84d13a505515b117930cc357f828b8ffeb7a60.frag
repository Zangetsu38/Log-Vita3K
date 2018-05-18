// Fragment shader.
#version 120

uniform ?vec4 texFilter2;
uniform ?vec2 alphaTest;
uniform sampler2D diffuseTex;

void main() {
    gl_FragColor = vec4(0, 1, 0, 1);
}
