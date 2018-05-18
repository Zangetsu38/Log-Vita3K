// Fragment shader.
#version 120

uniform float gTime;
uniform sampler2D diffuse;
uniform sampler2D normalmap;
uniform sampler2D scalemap;

void main() {
    gl_FragColor = vec4(0, 1, 0, 1);
}
