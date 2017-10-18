---
layout: page
title: "Q27835: Operator &quot;.&quot; and the Operator &quot;&#42;&quot;"
permalink: /pubs/pc/reference/microsoft/kb/Q27835/
---

## Q27835: Operator &quot;.&quot; and the Operator &quot;&#42;&quot;

	Article: Q27835
	Version(s): 5.10
	Operating System: MS-DOS
	Flags: ENDUSER | buglist5.10
	Last Modified: 27-MAY-1988
	
	Problem:
	   I am using indirect addressing in the following Microsoft Macro
	Assembler instruction (the variable "esi" is a structure variable and
	"eax" is a 386 register):
	
	mov eax,[eax.esi*2]
	
	   The opcodes generated by MASM indicate that MASM is not using
	indirect addressing.
	
	Response:
	   The problem occurs because the "." operator has a higher precedence
	than the "*" operator. MASM turns "[eax.esi*2]" into "[(eax+esi)*2]"
	as a result of the precedence. MASM evaluates "(eax+esi)" as a
	constant instead of a register; eax being used with a structure
	variable, esi. Thus, the result of the constant expression "(eax+esi)"
	is multiplied by two and the address mode is lost.
	   A workaround is to use the "+" operator which has lower precedence
	and produces the correct result. The "." operator should be reserved
	for structure field names as documented.
	   Microsoft will correct the problem in a future release.