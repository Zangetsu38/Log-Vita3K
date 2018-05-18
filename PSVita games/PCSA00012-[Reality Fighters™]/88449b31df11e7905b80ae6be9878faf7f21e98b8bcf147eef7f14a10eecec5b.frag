// Fragment shader.
#version 120

uniform vec2 inverse_w_sizes;
uniform sampler2D particleSampler;
uniform sampler2D depthsampler;

void main() {
    gl_FragColor = vec4(0, 1, 0, 1);
}
