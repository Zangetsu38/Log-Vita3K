// Fragment shader.
#version 120

uniform float rotation;
uniform ?vec2 center;
uniform sampler2D sceneSampler;
uniform sampler2D maskSampler;

void main() {
    gl_FragColor = vec4(0, 1, 0, 1);
}
