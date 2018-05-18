// Fragment shader.
#version 120

uniform vec3 lightPosition;
uniform float time;
uniform float FarClip;
uniform vec2 inverse_w_sizes;
uniform sampler2D cookieSampler;
uniform sampler2D shadowsampler;
uniform sampler2D depthsampler;
uniform sampler2D noisesampler;

void main() {
    gl_FragColor = vec4(0, 1, 0, 1);
}
