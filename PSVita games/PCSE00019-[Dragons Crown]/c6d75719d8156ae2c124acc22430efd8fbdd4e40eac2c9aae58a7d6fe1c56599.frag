// Fragment shader.
#version 120

uniform float _GrayValue;
uniform vec4 _R_Rate;
uniform vec4 _G_Rate;
uniform vec4 _B_Rate;

void main() {
    gl_FragColor = vec4(0, 1, 0, 1);
}
