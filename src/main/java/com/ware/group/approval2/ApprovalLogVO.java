package com.ware.group.approval2;

import java.sql.Date;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ApprovalLogVO {
	private long id;
	private long approvalId;
	private String memberId;
	private Date date;
	private long check;
}
