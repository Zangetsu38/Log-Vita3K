// Fragment shader.
#version 120

uniform vec2 brightness;
uniform vec2 palette_size;
uniform sampler2D diffuse;
uniform sampler2D palette;

void main() {
    gl_FragColor = vec4(0, 1, 0, 1);
}
