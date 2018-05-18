// Fragment shader.
#version 120

uniform vec2 center;
uniform float mag;
uniform float width;
uniform sampler2D sceneSampler;

void main() {
    gl_FragColor = vec4(0, 1, 0, 1);
}
