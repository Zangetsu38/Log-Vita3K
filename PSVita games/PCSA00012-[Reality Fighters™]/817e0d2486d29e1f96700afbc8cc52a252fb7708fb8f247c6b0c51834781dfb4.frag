// Fragment shader.
#version 120

uniform float offset;
uniform sampler2D diffuse;
uniform sampler2D intensitysampler;
uniform sampler2D pencil;

void main() {
    gl_FragColor = vec4(0, 1, 0, 1);
}
