package com.absg.catspatchserver.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Getter @Setter
public class User {
    @Id
    @Column(name = "user_id")
    private Long id; // 디바이스 아이디

    // TODO: 푸시 유무 & 시간 으로 구분
    private LocalDateTime push; // 푸시 알람 시간

    @CreationTimestamp // 생성 시간 자동 입력
    @Column(updatable = false, name = "create_date") // Entity 업데이트 시 해당 컬럼 제외 여부
    private LocalDateTime createAt;

    @JsonIgnore
    @OneToMany(mappedBy = "user")
    private List<Memo> memos = new ArrayList<>();
}
