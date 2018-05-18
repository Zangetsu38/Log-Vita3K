// Fragment shader.
#version 120

uniform sampler2D diffuse;
uniform sampler2D udiffuse;
uniform sampler2D vdiffuse;

void main() {
    gl_FragColor = vec4(0, 1, 0, 1);
}
