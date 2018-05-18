// Fragment shader.
#version 120

uniform float _GrayValue;
uniform sampler2D _Tex;

void main() {
    gl_FragColor = vec4(0, 1, 0, 1);
}
