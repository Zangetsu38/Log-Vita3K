// Fragment shader.
#version 120

uniform mat4 reprojection_matrix;
uniform float iHomo00;
uniform float iHomo01;
uniform float iHomo02;
uniform float iHomo10;
uniform float iHomo11;
uniform float iHomo12;
uniform float iHomo20;
uniform float iHomo21;
uniform float iHomo22;
uniform float alpha_texel_x;
uniform float alpha_texel_y;
uniform sampler2D diffuse;
uniform sampler2D mask;

void main() {
    gl_FragColor = vec4(0, 1, 0, 1);
}
