package com.absg.catspatchserver.domain;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;

import java.time.LocalDateTime;
import java.util.Date;

import static javax.persistence.FetchType.LAZY;

@Entity
@Getter @Setter
public class Memo {
    @Id
    @Column(name = "memo_id")
    private Long id;

    private String text;
    private String Emotion;

    @CreationTimestamp // 생성 시간 자동 입력
    @Column(updatable = false) // Entity 업데이트 시 해당 컬럼 제외 여부
    private LocalDateTime createAt;

    @UpdateTimestamp // 수정 시간 자동 입력
    private LocalDateTime updatedAt;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "user_id")
    private User user;
}
