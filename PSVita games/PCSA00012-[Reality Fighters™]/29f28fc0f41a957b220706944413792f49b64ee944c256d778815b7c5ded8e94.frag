// Fragment shader.
#version 120

uniform float time;
uniform sampler2D diffuse;
uniform sampler2D dudvmap;

void main() {
    gl_FragColor = vec4(0, 1, 0, 1);
}
