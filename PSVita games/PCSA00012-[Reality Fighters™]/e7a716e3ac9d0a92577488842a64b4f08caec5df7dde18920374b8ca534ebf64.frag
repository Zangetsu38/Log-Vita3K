// Fragment shader.
#version 120

uniform sampler2D diffuse;
uniform sampler2D mask;
uniform sampler2D cgradient;

void main() {
    gl_FragColor = vec4(0, 1, 0, 1);
}
