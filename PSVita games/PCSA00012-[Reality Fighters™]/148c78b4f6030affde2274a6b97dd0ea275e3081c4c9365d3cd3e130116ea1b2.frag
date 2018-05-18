// Fragment shader.
#version 120

uniform float BloomSaturation;
uniform float BloomIntensity;
uniform sampler2D BloomSampler;

void main() {
    gl_FragColor = vec4(0, 1, 0, 1);
}
