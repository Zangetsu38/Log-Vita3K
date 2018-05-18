// Fragment shader.
#version 120

uniform vec3 weights;
uniform vec2 brightness;
uniform vec2 palette_size;
uniform float female;
uniform sampler2D tex0;
uniform sampler2D tex1;
uniform sampler2D palette;

void main() {
    gl_FragColor = vec4(0, 1, 0, 1);
}
