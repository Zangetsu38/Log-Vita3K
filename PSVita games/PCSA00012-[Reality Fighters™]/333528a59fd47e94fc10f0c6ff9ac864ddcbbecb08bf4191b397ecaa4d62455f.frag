// Fragment shader.
#version 120

uniform float distort_scale;
uniform vec2 inverse_w_sizes;
uniform sampler2D sceneSampler;
uniform sampler2D depthsampler;
uniform sampler2D impactSampler;

void main() {
    gl_FragColor = vec4(0, 1, 0, 1);
}
