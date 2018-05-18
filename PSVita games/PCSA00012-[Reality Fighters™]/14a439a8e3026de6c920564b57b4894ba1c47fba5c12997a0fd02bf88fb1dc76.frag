// Fragment shader.
#version 120

uniform float color_normalizer;
uniform float fade;
uniform sampler2D diffuse;
uniform sampler2D color_correction;

void main() {
    gl_FragColor = vec4(0, 1, 0, 1);
}
