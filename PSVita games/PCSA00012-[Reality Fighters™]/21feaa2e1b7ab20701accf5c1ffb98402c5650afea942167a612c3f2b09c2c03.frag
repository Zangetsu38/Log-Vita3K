// Fragment shader.
#version 120

uniform float time;
uniform float sin_time;
uniform float randomOffset;
uniform sampler2D diffuse;
uniform sampler2D random2D;
uniform sampler2D perlin2D;

void main() {
    gl_FragColor = vec4(0, 1, 0, 1);
}
