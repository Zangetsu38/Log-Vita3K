// Fragment shader.
#version 120

uniform vec2 SampleOffsets[5];
uniform float SampleWeights[5];
uniform float scale;
uniform float lpitch;
uniform sampler2D TextureSampler;

void main() {
    gl_FragColor = vec4(0, 1, 0, 1);
}
