// Fragment shader.
#version 120

uniform float SampleWeights[5];
uniform sampler2D TextureSampler;

void main() {
    gl_FragColor = vec4(0, 1, 0, 1);
}
