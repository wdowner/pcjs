---
layout: page
title: "Q39374: RET Statement Label Appears on RET Listing, Not on First POP"
permalink: /pubs/pc/reference/microsoft/kb/Q39374/
---

## Q39374: RET Statement Label Appears on RET Listing, Not on First POP

	Article: Q39374
	Version(s): 5.10   | 5.10
	Operating System: MS-DOS | OS/2
	Flags: ENDUSER |
	Last Modified: 12-JAN-1989
	
	When the /LA option is used to list an RET statement that has a label
	and is contained in a PROC that has a USES clause and/or parameters,
	the label for the RET statement will be shown in the listing on the
	RET rather then on the first POP generated by MASM for the RET.
	
	Although the listing looks incorrect, the code generated and the value
	of the label are both correct. A jump to the label will in fact go to
	the first POP instruction, not directly to the RET instruction.
	
	Because the generated code is correct, no workaround is necessary to
	produce properly assembled code. A workaround to produce correct
	listings is to move the label to an otherwise blank line just before
	the RET instruction, as shown below.
	
	The USES clause tells MASM which registers the PROC changes. MASM then
	generates appropriate PUSH instructions at the PROC entry and POP
	instructions just before each RET. Using parameters on the PROC
	statement also causes PUSH and POP instructions for BP to be
	generated. When the /LA option is used to show the added instructions
	generated for the RET instruction, the listing shows the original
	source line, including the label, after the POP instruction(s) which
	are inserted by MASM. However, MASM assembles the code correctly so
	that the label actually refers to the first added POP instruction.
	Running the program under CodeView, checking the object code generated
	for jumps, and checking the value of the label on the RET in the
	symbol listing at the end of the program all confirm that MASM is
	producing correct code.
	
	The workaround to produce a correct listing is to change
	
	   JUMPHERE:   RET
	
	to the following:
	
	   JUMPHERE:
	               RET
	
	When this is done, the label will appear before the POP instructions.
	
	The sample code below illustrates the problem. Note: The the first
	three lines are necessary for using the "USES" directive. The
	following is the sample code:
	
	        dosseg
	        .model small,c
	        .code
	foo     proc uses si di bp
	        jz there
	there:  ret
	foo     endp
	        end
	........................................................................
	masm /LA ... :
	
	       1                                        dosseg
	       2                                        .model small,c
	       3                                assume cs:@code,ds:@data,ss:@data
	       4                                        .code
	       5 0000                           _TEXT segment 'CODE'
	       6 0000                           foo     proc uses si di bp
	       7 0000  56                       push SI
	       8 0001  57                       push DI
	       9 0002  55                       push BP
	      10 0003  74 00                            jz there
	      11 0005  5D                       pop BP
	      12 0006  5F                       pop DI
	      13 0007  5E                       pop SI
	      14 0008  C3                       there:  ret
	      15 0009                           foo     endp
	      16                                        end
	      17 0009                           @CurSeg ends
