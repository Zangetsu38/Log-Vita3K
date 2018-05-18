// Fragment shader.
#version 120

uniform sampler2D diffuse0;
uniform sampler2D diffuse1;
uniform sampler2D mix;

void main() {
    gl_FragColor = vec4(0, 1, 0, 1);
}
