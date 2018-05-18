// Fragment shader.
#version 120

uniform vec3 weights;
uniform sampler2D tex0;
uniform sampler2D tex1;
uniform sampler2D tex2;
uniform sampler2D tex3;

void main() {
    gl_FragColor = vec4(0, 1, 0, 1);
}
