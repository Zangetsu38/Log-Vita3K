// Fragment shader.
#version 120

uniform float time;
uniform vec3 lightDir;
uniform sampler2D noisesampler;
uniform sampler2D shadowsampler;

void main() {
    gl_FragColor = vec4(0, 1, 0, 1);
}
