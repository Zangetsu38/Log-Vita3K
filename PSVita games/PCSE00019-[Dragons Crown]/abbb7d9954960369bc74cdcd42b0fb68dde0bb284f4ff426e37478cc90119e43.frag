// Fragment shader.
#version 120

uniform vec4 _Fog;
uniform vec4 _R_Rate;
uniform vec4 _G_Rate;
uniform vec4 _B_Rate;
uniform sampler2D _Tex;

void main() {
    gl_FragColor = vec4(0, 1, 0, 1);
}
